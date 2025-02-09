import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import { UpdateSchema } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Navbar from "./Navbar";
import cherrypie from "../assets/cherrypie.svg";

function Profile() {
  const form = useForm<z.infer<typeof UpdateSchema>>({
    resolver: zodResolver(UpdateSchema),
  });

  const [profileUpdated, setProfileUpdated] = useState(false);

  const username = JSON.parse(localStorage.getItem("username") || "null");
  const email = JSON.parse(localStorage.getItem("email") || "null");
  const password = JSON.parse(localStorage.getItem("password") || "null");
  const firstLetter = username?.charAt(0) || "U";

  const onSubmit = (data: z.infer<typeof UpdateSchema>) => {
    const updatedData = { ...data };

    if (updatedData.username) {
      localStorage.setItem("username", JSON.stringify(updatedData.username));
    }
    if (updatedData.email) {
      localStorage.setItem("email", JSON.stringify(updatedData.email));
    }
    if (updatedData.password) {
      localStorage.setItem("password", JSON.stringify(updatedData.password));
    }

    setProfileUpdated(true);
  };

  return (
    <div className="h-max">
      <Navbar/>
    <div className="flex lg:justify-evenly ">
      {/* form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 pt-[2%] w-[30%]"
        >
      <div className="flex flex-col items-center">
        <div
          id="profile-pic"
          className="bg-[#f5f4f4] text-green-600 border-2 border-green-600 flex items-center justify-center rounded-full w-16 h-16 text-xl font-bold"
          title={username || "User"}
        >
          {firstLetter}
        </div>
        <p className="mt-2 font-semibold">{username || ""}</p>
      </div>
         
          {/*username*/}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="col">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <input
                    defaultValue={username || ""}
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
          {/*email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input
                    defaultValue={email || ""}
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
          {/*password*/}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="col">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <input
                    defaultValue={password || ""}
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
          {/*password confirmation*/}
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
          {profileUpdated && (
            <p className="text-green-500 mt-3">
              Your profile has been updated successfully!
            </p>
          )}
          <Button
            className="text-green-400"
          >
            Update
          </Button>
        </form>
      </Form>
      <img src={cherrypie} alt="" className="w-[30%]"/>
      </div>
    </div>
  );
}

export default Profile;