import React from "react";
import { Form } from "react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function SignIn() {
    return (
        <section className="container ">
            <h1>Sign in or create an account</h1>
            <Form action="/signin" className="">
                <Label htmlFor="email">Email address</Label>
                <Input type="email" />
                <Button variant="outline">Button</Button>
            </Form>
        </section>
    );
}

export default SignIn;
