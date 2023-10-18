
import { SignIn } from "@clerk/nextjs";
export default function SignInForm() {
 
  return (
    <div className="flex min-h-screen flex-col items-center justify-center b">
        <SignIn/>
    </div>
  );
}