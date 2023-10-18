import { SignUp } from "@clerk/nextjs";
 
export default function SignUpForm() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center b">
        <SignUp/>
    </div>
    );
  
}