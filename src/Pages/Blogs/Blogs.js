import React from 'react';


const Blogs = () => {
    return (
        <section className="mb-20">

            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Blogs</h2>
                <div className="divide-y divide-gray-700">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">Treating Covid-19 at home</h3>
                        <p className="md:pl-0 md:col-span-7">If you have coronavirus disease 2019 (COVID-19) and you're caring for yourself at home or you're caring for a loved one with COVID-19 at home, you might have questions. How do you know when emergency care is needed? How long do you need to isolate? What can you do to prevent the spread of germs? How can you support a sick loved one and manage your stress? Here's what you need to know.

                            At-home treatment
                            Most people who become sick with COVID-19 will only have mild illness and can get better at home. Symptoms might last a few days. People who have the virus might feel better in about a week. Treatment is aimed at relieving symptoms and includes:

                            Rest
                            Fluids
                            Pain relievers
                            But adults over age 65 and people of any age with existing long-lasting (chronic) medical conditions should call their health care provider as soon as symptoms start. These factors put people at greater risk of becoming seriously ill with COVID-19. People with these conditions who get COVID-19 may also be eligible for certain treatments. These treatments need to start within a few days after symptoms start.

                            Follow the health care provider's suggestions about care and staying at home (isolating). Talk to the provider if you have any questions about treatments. Help the sick person get food and any medication needed. And, if needed, take care of the person's pet.

                            Also think about how caring for a sick person might affect your health. If you are age 65 or older or have an existing long-lasting (chronic) medical condition, such as heart or lung disease or diabetes, you may be at higher risk of serious illness with COVID-19. You might think about staying away from the sick person and finding another person to provide care. Also, you might choose to wear a face mask that gives higher protection.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">How does prototypical inheritance work?</h3>
                        <p className="md:pl-0 md:col-span-7">When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented. Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern. While classes abstract most of the prototypical mechanism away, understanding how prototypes work under the hood is still useful.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What is a unit test? Why should we write unit tests?</h3>
                        <p className="md:pl-0 md:col-span-7">Cancer refers to any one of a large number of diseases characterized by the development of abnormal cells that divide uncontrollably and have the ability to infiltrate and destroy normal body tissue. Cancer often has the ability to spread throughout your body.

                            Cancer is the second-leading cause of death in the world. But survival rates are improving for many types of cancer, thanks to improvements in cancer screening, treatment and prevention.
                            Signs and symptoms caused by cancer will vary depending on what part of the body is affected.

                            Some general signs and symptoms associated with, but not specific to, cancer, include:

                            Fatigue
                            Lump or area of thickening that can be felt under the skin
                            Weight changes, including unintended loss or gain
                            Skin changes, such as yellowing, darkening or redness of the skin, sores that won't heal, or changes to existing moles
                            Changes in bowel or bladder habits
                            Persistent cough or trouble breathing
                            Difficulty swallowing
                            Hoarseness
                            Persistent indigestion or discomfort after eating
                            Persistent, unexplained muscle or joint pain
                            Persistent, unexplained fevers or night sweats
                            Unexplained bleeding or bruising </p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">Sudden cardiac arrest</h3>
                        <p className="md:pl-0 md:col-span-7">Sudden cardiac arrest (SCA) is the sudden loss of all heart activity due to an irregular heart rhythm. Breathing stops. The person becomes unconscious. Without immediate treatment, sudden cardiac arrest can lead to death.

                            Emergency treatment for sudden cardiac arrest includes cardiopulmonary resuscitation (CPR) and shocks to the heart with a device called an automated external defibrillator (AED). Survival is possible with fast, appropriate medical care.

                            Sudden cardiac arrest isn't the same as a heart attack. A heart attack happens when blood flow to a part of the heart is blocked. Sudden cardiac arrest is not due to a blockage. However, a heart attack can cause a change in the heart's electrical activity that leads to sudden cardiac arrest.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;

