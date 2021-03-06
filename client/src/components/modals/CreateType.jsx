import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { createType } from '../../http/productAPI';


const CreateType = ({ show, onHide }) => {
	const [value, setValue] = useState('') // Локальное состояние

	const addType = () => { // Добавление типа
		createType({ name: value })
			.then(data => {
				setValue('') // В случае успешной отправки обнуляем инпут
				onHide() // Закрытие модального окна
			})
	}


	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить тип
        		</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					{/* Инпут */}
					<Form.Control
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder={"Введите название типа"}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={addType}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	)
}

export { CreateType }
