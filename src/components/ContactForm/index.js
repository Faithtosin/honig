import { Input, TextArea } from "./ContactFormElements";

const ContactForm = ({ inputElements }) => {
	const style = {
		width: "unset",
		backgroundColor: "#388bff",
		color: "#fff",
		fontSize: "12px",
		fontWeight: "700",
		padding: "8px 10px 7px",
	};
	return (
		<div>
			<form>
				{inputElements.map(({ placeholder, textarea }) =>
					textarea ? (
						<TextArea placeholder={placeholder} rows={"10"} style={{ resize: "vertical" }} />
					) : (
						<Input type={"text"} placeholder={placeholder} />
					)
				)}
				<Input type={"submit"} value={"SUBMIT"} style={style} />
			</form>
		</div>
	);
};

export default ContactForm;
