import { Input, TextArea } from "./ContactFormElements";
import axios from "axios";
import { useAlert } from "react-alert";

const ContactForm = ({ inputElements }) => {
	const style = {
		width: "unset",
		backgroundColor: "#388bff",
		color: "#fff",
		fontSize: "12px",
		fontWeight: "700",
		padding: "8px 10px 7px",
	};

	const sendTo = "tthesis007@gmail.com";

	const alert = useAlert();

	const onSubmit = (e) => {
		e.preventDefault();
		const { name, email, phone, subject, message } = e.target;
		axios.defaults.headers.post["Content-Type"] = "application/json";
		axios
			.post(`https://formsubmit.co/ajax/${sendTo}`, {
				name: name.value,
				email: email.value,
				phone: phone.value,
				subject: subject.value,
				message: message.value,
			})
			.then((response) => {
				document.getElementById("contact-form").reset();
				alert.success(response.data.message);
			})
			.catch((error) => alert.error("Something went wrong"));
	};

	return (
		<form onSubmit={(e) => onSubmit(e)} id="contact-form">
			{inputElements.map(({ placeholder, textarea, label }) =>
				textarea ? (
					<TextArea placeholder={placeholder} name={label} rows={"10"} style={{ resize: "vertical" }} required />
				) : (
					<Input key={placeholder} type={label} name={label} placeholder={placeholder} required />
				)
			)}
			<Input type="submit" value="SUBMIT" style={style} />
		</form>
	);
};

export default ContactForm;
