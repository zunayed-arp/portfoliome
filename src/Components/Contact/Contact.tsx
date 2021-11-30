// @ts-ignore
import JotFormReact from 'jotform-react';

const Contact = () => {
    return (
        <div className="">
            <h1 className="text-4xl md:text-5xl font-bold leading-normal">Contact Me</h1>
            <JotFormReact
                className="mt-5"
                formURL="https://form.jotform.com/213321911862450"
                autoResize={true}
                autoFocus={true}
            />
        </div>
    );
};

export default Contact;