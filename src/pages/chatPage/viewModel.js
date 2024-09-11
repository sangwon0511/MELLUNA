import React, { useState, useEffect, useRef } from "react";
import io from 'socket.io-client';

import { getChatPageItems } from "../../apis";
import { useParams } from "react-router-dom";


function ChatPageViewModel() {
	const params = useParams();

	const chat_room_id = params.id
	const [metadata, setMetadata] = useState({
		opponent_name: "로딩중",
		product_name: "로딩중",
		product_price: 0
	})
	const [chatInput, setChatInput] = useState("")
	const [socketIO, setSocketIO] = useState()
	const [inputDisabled, setInputDisabled] = useState(true)
	const [chat, setChat] = useState([])
	const bottomRef = useRef()
	const inputRef = useRef()
	const [modal, setModal] = useState({
		is_open: false,
		content: "로딩중",
	});

	const addChat = ({ content, is_me }) => {
		setChat((prev) => {
			return [...prev, {
				"sender_name": "me",
				"content": content,
				"is_me": is_me,
			}]
		})
		bottomRef.current.scrollIntoView({ behavior: 'smooth' });
		if (is_me === false) {
			setInputDisabled(false)
			inputRef.current.focus()

		}
	}

	const onChatInputChange = (e) => {
		setChatInput(e.target.value)
	}

	const onChatSubmit = (e) => {
		setInputDisabled(true)
		if (e.type == "submit") {
			e.preventDefault()
		}
		if (chatInput.trim().length == 0) {
			return
		}
		socketIO.emit("send_message", { "content": chatInput })
		setChatInput("")
		bottomRef.current.scrollIntoView({ behavior: 'smooth' });
		inputRef.current.focus()
	}

	useEffect(() => {
		getChatPageItems(chat_room_id).then((res) => {
			setMetadata({
				opponent_name: res.opponent_name,
				product_name: res.product_name,
				product_price: res.product_price
			});
			console.log(res.chat)

			setChat(res.chat);
		});
	}, []);

	const OpenModal = (message) => {
		setModal({
			"is_open": true,
			"content": message
		})
		console.log(message)
	}

	const closeModal = () => {
		setModal({
			"is_open": false,
			"content": ""
		})

	}

	useEffect(() => {
		var socket = io.connect("/")
		setSocketIO(socket)

		socket.emit("join", { "room_id": chat_room_id })

		socket.on('join', () => { })

		socket.on("receive_message", addChat)

		socket.on("alert", (data) => { OpenModal(data['content']) })

		return () => {
			socket.emit("leave", {})
		}

	}, []);

	return { metadata, closeModal, chat, chat_room_id, inputDisabled, onChatInputChange, inputRef, chatInput, bottomRef, onChatSubmit, modal }
}

export default ChatPageViewModel;
