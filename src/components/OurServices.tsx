import Image from "next/image"

export const OurServices = () => {
    return (
        <section className='py-[2rem] px-[4rem]' id="our-services">
            <h2 className="text-[#9E9E9E] font-medium text-[20px] relative">/Our Services <span className="text-[11px] absolute ml-1 font-medium">01</span></h2>
            <div className="custom_hr" />
            <h4 className="heading-information">
                We're here to unlock digital opportunities for you, helping your brand flourish in the ever-evolving online landscape. Let's build the future together.
            </h4>
            <div className="services_wrapper">
                <div className="services_item relative">
                    <h5>Web Development</h5>
                    <div className="services_item_desc">
                        <p>
                            Your website is often the first point of contact between your audience and your brand. Our web development team takes this responsibility seriously, creating eye-catching, responsive, and fast-loading websites that leave a lasting impression.
                        </p>
                    </div>
                    <div className="services_item_stack">
                        <span>ReactJS</span>
                        <span>VueJS</span>
                        <span>Laravel</span>
                        <span>Wordpress</span>
                        <span>NodeJS</span>
                    </div>
                </div>
                <div className="services_item relative">
                    <h5>Mobile App Development</h5>
                    <div className="services_item_desc">
                        <p>
                            In a mobile-first world, your brand needs a presence that fits right in your customers' pockets. Our mobile app development team brings ideas to life, crafting engaging and intuitive apps that make a lasting impact.
                        </p>
                    </div>
                    <div className="services_item_stack">
                        <span>React Native</span>
                        <span>Flutter</span>
                    </div>
                </div>
                <div className="services_item relative">
                    <h5>Design Solutions</h5>
                    <div className="services_item_desc">
                        <p>
                            Our design philosophy is rooted in innovation and creativity. We don't just follow design trends; we set them. We embrace the challenge of finding unique and tailored design solutions for each project.
                        </p>
                    </div>
                    <div className="services_item_stack">
                        <span>Figma</span>
                        <span>Adobe Illustrator</span>
                        <span>Blender</span>
                    </div>
                </div>
            </div>
        </section>
    )
}