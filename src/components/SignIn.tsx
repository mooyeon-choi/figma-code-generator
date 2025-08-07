import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const imgDiv = "/assets/signin-bg.png";

export default function SignIn() {
  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left side - Sign in form */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-[360px]">
          {/* Header */}
          <div className="mb-6 space-y-3">
            <h1 className="text-3xl font-bold text-neutral-950">Sign in</h1>
            <p className="text-sm text-neutral-500">
              Log in to unlock tailored content and stay connected with your
              community.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Email input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email or username"
                className="h-9"
              />
            </div>

            {/* Password input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="h-9"
              />
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  className="border-neutral-900 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-neutral-50"
                />
                <Label
                  htmlFor="remember"
                  className="cursor-pointer text-sm font-medium"
                >
                  Keep me signed in
                </Label>
              </div>
              <a
                href="#"
                className="text-sm text-neutral-500 underline underline-offset-2 hover:text-neutral-900"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full bg-neutral-900 text-neutral-50 hover:bg-neutral-800"
            >
              Sign in
            </Button>
          </form>

          {/* Sign up link */}
          <div className="mt-4 text-center text-sm">
            <span className="text-neutral-500">Don't have an account? </span>
            <a
              href="#"
              className="text-neutral-900 underline underline-offset-2"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Background image */}
      <div
        className="hidden flex-1 rounded-[14px] bg-cover bg-center bg-no-repeat lg:block"
        style={{
          backgroundImage: `url('${imgDiv}')`,
          margin: "24px 24px 24px 0",
        }}
      />
    </div>
  );
}