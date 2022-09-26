import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, FormSchemaType } from "../schemas/schemas";

const Home: NextPage = () => {
	const { register, watch, handleSubmit } = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
	});

	const sendToEMail = watch("sendToEMail");

	const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
		if (data.sendToEMail) {
			console.log(data);
		} else {
			console.log(data);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Order Package</h1>
				<label>
					<span>Your name</span>
					<input type="text" {...register("name")} />
				</label>
				<label>
					<input type="checkbox" {...register("sendToEMail")} />
					<span>Send receipt to email?</span>
				</label>
				{sendToEMail && (
						<label>
							<span>Email</span>
							<input
								type="text"
								{...register("email", { shouldUnregister: true })}
							/>
						</label>
				)}
        {/* This is to show proof of concept, would not be part of an actual app */}
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
				<button>Order Package</button>
			</form>
		</div>
	);
};

export default Home;
