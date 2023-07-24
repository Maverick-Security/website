import { useEffect } from "react";
import { useRouter } from "next/router";

const DiscordInvite = () => {
    const router = useRouter();

    useEffect(() => {
        if(typeof window !== 'undefined'){
            router.push('https://discord.gg/SQtNSZvKDJ')
        }
    }, [])

    return null;
}

export default DiscordInvite;