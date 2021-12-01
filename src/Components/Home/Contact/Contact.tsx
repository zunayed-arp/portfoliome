import JotFormReact from 'jotform-react';
import { useState } from 'react';

const Contact = () => {
    const [ loading, setLoading ] = useState<boolean>(true)
    return (
        <div data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-normal">Contact Me</h1>
            {
                loading && <h3 className="text-2xl text-center mt-10 animate-pulse ">
                    Please wait a moment..
                </h3>
            }
            <JotFormReact
                onLoad={() => setLoading(false)}
                className="mt-5"
                formURL="https://form.jotform.com/213321911862450"
                autoResize={true}
                autoFocus={true}
            />
        </div>
    );
};

export default Contact;