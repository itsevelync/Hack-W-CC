import Bottle from '../assets/Bottle.png';

function MessageSent() {
    return (
        <div className='fixed inset-0 flex flex-col justify-center items-center w-screen h-screen message-sent' style={{ 
            // animation: 'messageSent 3s ease-in-out forwards', 
            opacity: 1
        }}>
            <div className="absolute top-0 left-0 w-full h-full bg-m-tan opacity-100 z-50">
            </div>
            <img src={Bottle} width='300' className='z-50'></img>
            <p className='py-4 z-50'>Bottle tossed in the ocean!</p>
        </div>
    )
}

export default MessageSent;