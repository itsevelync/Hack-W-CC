import Bottle from '../assets/Bottle.png';

function MessageSent() {
    return (
        <div className='flex flex-col m-8 items-center' style={{ 
            animation: 'messageSent 3s ease-in-out forwards' 
        }}>
            <img src={Bottle} width='300'></img>
            <text className='py-4'>Bottle tossed in the ocean!</text>
        </div>
    )
}

export default MessageSent;