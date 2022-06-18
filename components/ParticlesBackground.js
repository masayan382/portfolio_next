import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { css } from "@mui/styled-engine"

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main)
    }

    const bg = css({
        backgroundImage: "url('/img/bg.jpg')",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#323031",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    })

    const particlesLoaded = (container) => {
        console.log(container)
    }
    return (
        <Particles
            css={bg}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 200,
                        limit: 300,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000",
                        },
                        polygon: {
                            nb_sides: 5,
                        },
                        image: {
                            src: "images/github.svg",
                            width: 100,
                            height: 100,
                        },
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.5,
                            sync: false,
                        },
                    },
                    size: {
                        value: 30,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10,
                            size_min: 10,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 100,
                        color: "#ffffff",
                        opacity: 1,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                            parallax: {
                                enable: false,
                                force: 60,
                                smooth: 10,
                            },
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            lineLinked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 100,
                            duration: 2,
                            opacity: 1,
                            speed: 2,
                        },
                        repulse: {
                            distance: 200,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                backgroundMask: {
                    enable: true,
                    cover: {
                        color: {
                            value: {
                                r: 0,
                                g: 0,
                                b: 0,
                            },
                        },
                    },
                },
                retina_detect: true,
                fps_limit: 30,
            }}
        />
    )
}
export default ParticlesBackground
