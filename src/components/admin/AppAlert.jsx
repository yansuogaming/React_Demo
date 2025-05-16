import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function AppAlert({ title, message, type }) {
    return (
        type === "success" ? (
            <Alert className="absolute top-[20px] right-[10px] w-[300px]">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>
                    {message}
                </AlertDescription>
            </Alert>
        ) : (
            <Alert variant="destructive" className="absolute top-[20px] right-[10px] w-[300px]">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>
                    {message}
                </AlertDescription>
            </Alert>
        )
    )
}