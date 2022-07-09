import { Controller, SubmitHandler, useForm } from "react-hook-form"
import type { NextPage } from "next"
import { Button, Stack, TextField } from "@mui/material"
import { css } from "@mui/styled-engine"

type FormInput = {
    name: string
    email: string
    emailConfirm: string
    comment: string
}

const narrowMsg = css({
    " p": {
        margin: "4px 0",
    },
})

const MailForm2: NextPage = () => {
    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
        reset,
    } = useForm<FormInput>()

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        fetch("/api/mail", {
            method: "POST",
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                msg: data.comment,
            }),
        })
            .then((res) => {
                console.log("Response received")
                if (res.status === 200) {
                    alert("メール送信完了")
                    reset()
                } else {
                    console.log(`Error: Status Code ${res.status}`)
                    alert("メール送信に失敗しました")
                }
            })
            .catch((e) => {
                console.log(`Error: ${e}`)
                alert("メール送信に失敗しました")
            })
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                    spacing={2}
                    padding={2}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: 4,
                        p: {
                            margin: "4px 0",
                        },
                    }}
                    css={narrowMsg}
                >
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "入力してください",
                            maxLength: {
                                value: 20,
                                message: "20文字以内にしてください",
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="お名前"
                                error={!!errors.name}
                                helperText={errors.name && errors.name.message}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "入力してください",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "メールアドレスの形式が違います",
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="メールアドレス"
                                error={!!errors.email}
                                helperText={
                                    errors.email && errors.email.message
                                }
                            />
                        )}
                    />
                    <Controller
                        name="emailConfirm"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "入力してください",
                            validate: (value) => {
                                if (value !== getValues("email")) {
                                    return "メールアドレスが一致しません"
                                }
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="メールアドレスの確認"
                                // バリデーションエラーがあればhelperTextに表示する
                                error={!!errors.emailConfirm}
                                helperText={
                                    errors.emailConfirm &&
                                    errors.emailConfirm.message
                                }
                            />
                        )}
                    />
                    <Controller
                        name="comment"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "入力してください",
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="お問い合わせ内容"
                                // バリデーションエラーがあればhelperTextに表示する
                                error={!!errors.comment}
                                helperText={
                                    errors.comment && errors.comment.message
                                }
                                multiline
                                rows={6}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            color: "#333",
                            background:
                                "linear-gradient(90deg, rgba(185, 226, 239, 1) , rgba(217, 184, 223, 1))",
                            ":hover": {
                                background:
                                    "linear-gradient(90deg, rgba(185, 226, 239, 1) , rgba(217, 184, 223, 1))",
                                opacity: "0.7",
                            },
                        }}
                    >
                        送信
                    </Button>
                </Stack>
            </form>
        </>
    )
}

export default MailForm2
