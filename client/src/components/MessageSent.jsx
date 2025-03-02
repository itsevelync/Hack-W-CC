import Bottle from '../assets/Bottle.png';

function MessageSent() {
    return (
        <div className='flex flex-col m-8 relative items-center bg-m-beige w-full h-full message-sent' style={{ 
            animation: 'messageSent 3s ease-in-out forwards', 
            opacity: 1
        }}>
            <img src={Bottle} width='300' className=''></img>
            <text className='py-4'>Bottle tossed in the ocean!</text>
        </div>
    )
}

export default MessageSent;