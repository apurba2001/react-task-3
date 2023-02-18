import {TailSpin} from 'react-loader-spinner'
import './App.css';

const Loder = () =>{
    return(
        <div className='loder'>
            <TailSpin
                height="60"
                width="60"
                color=" rgb(32, 145, 244)"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loder