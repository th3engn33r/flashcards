'use server';
import { cookies } from 'next/headers';
type ResponseType = { status: boolean; message: string };

export default async function action(
  prevState: ResponseType | undefined,
  formData: FormData
): Promise<ResponseType> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  //call backend to validate user

  const cookieStore = await cookies();
  if (email === 'test@test.com' && password === 'qqq') {
    cookieStore.set('userId', email, { secure: true });
  }

  await new Promise((val) => setTimeout(val, 1000));
  return email === 'test@test.com' && password === 'qqq'
    ? { status: true, message: 'You are a valid user' }
    : { status: true, message: 'Try again' };
}
