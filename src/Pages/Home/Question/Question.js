import React from 'react';

const Question = () => {
    return (
        <div>
            <h1 className='text-center text-5xl p-2'>
                Questions? <br />
                I am here to help.
            </h1>
            <div className="collapse mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800 peer-checked:bg-gray-600 peer-checked:text-secondary-content text-center">
                    How does Programmer's Kitchen work?
                </div>
                <div className="collapse-content peer-checked text-center">
                    <p>In PK kitchen, like restaurant is focused on delivery rather than dine-in. When eaters order your food online, you will prepare it from your ghost kitchen, and hand it off to a fulfillment team to get the order over to the right delivery driver. This gives restaurateurs a low cost, high efficiency model to get the most out of delivery.</p>
                </div>
            </div>
            <div className="collapse mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800 peer-checked:bg-gray-600 peer-checked:text-secondary-content text-center">
                    Is cooking something new?
                </div>
                <div className="collapse-content peer-checked text-center">
                    <p>All you want is the delay and the time it takes to order!!!</p>
                </div>
            </div>
            <div className="collapse mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800 peer-checked:bg-gray-600 peer-checked:text-secondary-content text-center">
                    Why is Programmer's Kitchen so popular?
                </div>
                <div className="collapse-content peer-checked text-center">
                    <p>I believe in the best. Delivering fresh and delicious food is my commitment. So keep coding.........</p>
                </div>
            </div>
        </div>
    );
};

export default Question;