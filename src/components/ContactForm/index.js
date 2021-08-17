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
			<iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSe2wWX27TAwUmUersAr_XHxqTCw0LG1HKYKLKkl6zrrsUnc0g/viewform?embedded=true"
				width="100%"
				height="1072"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
				title="Google Forms"
			>
				Loading…
			</iframe>
			{/* <form>
				{inputElements.map(({ placeholder, textarea }) =>
					textarea ? (
						<TextArea placeholder={placeholder} rows={"10"} style={{ resize: "vertical" }} />
					) : (
						<Input type={"text"} placeholder={placeholder} />
					)
				)}
				<Input type={"submit"} value={"SUBMIT"} style={style} />
			</form> */}
		</div>
	);
};

export default ContactForm;
