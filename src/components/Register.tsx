import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RegistSchema } from "../schema";
import blub from "../assets/blub.svg";
import { useNavigate } from "react-router-dom";
import chef from "../assets/chef.svg";

export default function Register() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof RegistSchema>>({
    resolver: zodResolver(RegistSchema),
  });
  const onSubmit = (data: z.infer<typeof RegistSchema>) => {
    const { username, email, password } = data;
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));

    navigate("/Recipe_finder/profile/");
  };

  return (
    <>
      <div className="flex justify-around overflow-hidden h-screen">
        <Form {...form} >
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 p-[9%] w-[50%] "
          >
            <h1 className="text-3xl">Create an Account</h1>
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="col">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Enter your username"
                      {...field}
                      className="border rounded px-3 py-2 "
                    />
                  </FormControl>
                  {form.formState.errors.username && (
                    <p className="text-red-500">
                      {form.formState.errors.username.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Enter your email"
                      {...field}
                      className="border rounded px-3 py-2 "
                    />
                  </FormControl>
                  {form.formState.errors.email && (
                    <p className="text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="col">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Password"
                      {...field}
                      type="password"
                      className="border rounded px-3 py-2 "
                    />
                  </FormControl>
                  {form.formState.errors.password && (
                    <p className="text-red-500">
                      {form.formState.errors.password.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            {/*Password Confirmation Field*/}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="col">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      {...field}
                      className="border rounded px-3 py-2 "
                    />
                  </FormControl>
                  {form.formState.errors.confirmPassword && (
                    <p className="text-red-500">
                      {form.formState.errors.confirmPassword.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            <p><a className="underline" href="">Already have account? </a></p>
            <Button
              className="text-gray-400"
              onClick={() => navigate("/Recipe_finder/")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green-500 text-white m-3"
              // onClick={() => navigate("/Recipe_finder/search/")}
            >
              Register
            </Button>
          </form>
        </Form>
        <img 
        src={chef} 
        alt="" 
        className="w-[50%] p-[8%] "
        />
        <img src={blub} alt="" className="absolute right-0" />
      </div>
    </>
  );
}
