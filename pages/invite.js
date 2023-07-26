import { useEffect } from "react";
import { useRouter } from "next/router";

const Invite = () => {
    const router = useRouter();

    useEffect(() => {
        if(typeof window !== 'undefined'){
            router.push('https://discord.com/api/oauth2/authorize?client_id=1124332053027102761&permissions=8&scope=bot%20applications.commands')
        }
    }, [router])

    return null;
}

export default Invite;