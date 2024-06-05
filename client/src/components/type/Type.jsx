import Typewriter from "typewriter-effect"

const Type = () => {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ["Web developer", "Frontend developer", "Fullstack developer"],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20
                }}
            />
        </div>
    )
};

export default Type