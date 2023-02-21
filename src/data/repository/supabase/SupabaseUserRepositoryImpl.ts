import {UserRepository} from "../../../domain/repository/UserRepository";
import {createClient} from "@supabase/supabase-js";

const sudb = createClient('https://xrjqpgloidxweglyfqwy.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyanFwZ2xvaWR4d2VnbHlmcXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1ODQwODYsImV4cCI6MTk5MDE2MDA4Nn0.J84oKYo01xM033bCPZiSaOQLOMriZ3bYCj8y148PWh8')


export class SupabaseUserRepositoryImpl implements UserRepository {
    
    login(email: string, password: string): void {
        sudb.auth.signInWithPassword({email, password})
            .then( (res) => {
                console.log(`User ${email} logged in`)
                // You can store the session data in local storage or in a redux store
                localStorage.setItem('session', JSON.stringify(res.data.session))
            })
            .catch(error => {
                console.error(error)
                // Handle the error and give a feedback to the user
            })
    }

    logout(): void {
        sudb.auth.signOut()
            .then(() => {
                console.log('User logged out')
                // Clear any stored session data
                localStorage.removeItem('session')
            })
            .catch(error => {
                console.error(error)
                // Handle the error and give a feedback to the user
            })
    }

    signup(email: string, password: string): void {
        sudb.auth.signUp({email:email, password: password})
            .then((res ) => {
                console.log(`User ${email} signed up`)
                // You can store the user data in local storage or in a redux store
                localStorage.setItem('user', JSON.stringify(res.data.session))
            })
            .catch(error => {
                console.error(error)
                // Handle the error and give a feedback to the user
            })

    }

    async isEmailTaken(email: string): Promise<boolean> {
        try {
            const { data:users } = await sudb.from('users').select('*').eq('email', email);
            return users.length > 0;
        } catch (error) {
            console.error(error)
            throw new Error('An error occurred while checking if the email is taken')
        }
    }


}