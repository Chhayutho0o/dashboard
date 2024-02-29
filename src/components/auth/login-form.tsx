"use client";

import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import { AuthForm } from "@/types";
import { Field, Form, Formik, FormikProps } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { useRouter } from "@/hooks/useRouter";
import { login } from "@/actions/auth";
import { Loader2 } from "lucide-react";
import authValidation from "@/validation/auth";
import { toast } from "sonner";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LoginForm({ className, ...props }: LoginFormProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [showPassword, setShowPassword] = useState(false);
	const initValue: AuthForm = {
		username: "",
		password: "",
	};

	const handleSubmit = async (values: any, setErrors: any) => {
		startTransition(async () => {
			try {
				const res = await login(values);
				if (res.status === "error") {
					setErrors(res);
					toast.warning("Invalid login credentials");
					return;
				}

				toast.success("Login successfully");
				router.push("/");
			} catch (error: any) {
				setErrors(error);
				toast.success("Something weng wrong!");
			}
		});
	};

	return (
		<div className={cn("grid gap-6", className)} {...props}>
			<Formik
				initialValues={initValue}
				validationSchema={authValidation}
				onSubmit={(values: any, { setErrors }) => {
					handleSubmit(values, setErrors);
				}}
			>
				{(props: FormikProps<any>) => {
					return (
						<Form>
							<div className="grid gap-2">
								<div className="grid gap-1">
									<Label className="sr-only" htmlFor="username">
										Email
									</Label>
									<Field
										name="username"
										type="text"
										placeholder="enter your username"
										component={Input}
									/>
								</div>
								<div className="grid gap-1 mt-2">
									<Label className="sr-only" htmlFor="username">
										Email
									</Label>
									<Field
										name="password"
										type="password"
										placeholder="enter your password"
										component={Input}
									/>
								</div>
								<Separator className="my-2" />
								<Button
									type="submit"
									disabled={isPending || !props.dirty || !props.isValid}
								>
									{isPending ? (
										<Loader2 className="animate-spin w-4 h-4" />
									) : (
										"Login"
									)}
								</Button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}
