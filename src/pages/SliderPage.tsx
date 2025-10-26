import { useState } from "react"
import { Slider } from "../components"
import Container from "./Container"

const SliderPage = () => {
    const [sliderValue, setSliderValue] = useState(50)
    const [markValue, setMarkValue] = useState(50)

    return (
        <Container title="Slider Component" description="Allow users to make selections from a range of values.">

            {/* Basic Example */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">
                    Basic
                </h2>
                <Slider
                    step={10}
                    value={markValue}
                    onChange={(e) => setMarkValue(Number(e.target.value))}
                />
            </section>

            {/* With Icon */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">
                    With Icon
                </h2>
                <Slider
                    label="Volume"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    prefixIcon={
                        <svg className="w-6 h-6 fill-secondary-foreground" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 4.19L4.524 6.274a1.25 1.25 0 01-.717.226H1.5v3h2.307c.256 0 .506.079.717.226L7.5 11.809V4.19zm-.467-1.504A1.25 1.25 0 019 3.71v8.58a1.25 1.25 0 01-1.967 1.024L3.728 11H1.25C.56 11 0 10.44 0 9.75v-3.5C0 5.56.56 5 1.25 5h2.478l3.305-2.314z" clipRule="evenodd" /></svg>
                    }
                    suffixIcon={
                        <svg className="w-6 h-6 fill-secondary-foreground" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.66,6.34a1,1,0,0,0-1.42,1.42,6,6,0,0,1-.38,8.84,1,1,0,0,0,.64,1.76,1,1,0,0,0,.64-.23,8,8,0,0,0,.52-11.79ZM16.83,9.17a1,1,0,1,0-1.42,1.42A2,2,0,0,1,16,12a2,2,0,0,1-.71,1.53,1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.12A4,4,0,0,0,18,12,4.06,4.06,0,0,0,16.83,9.17Z" /></svg>
                    }
                />
            </section>

            {/* Colors */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">
                    Colors
                </h2>
                <div className="flex flex-col gap-4">
                    <Slider color="primary" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
                    <Slider color="secondary" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
                    <Slider color="info" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
                    <Slider color="success" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
                    <Slider color="warning" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
                    <Slider color="error" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
                </div>
            </section>

            {/* Sizes */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">
                    Sizes
                </h2>
                <div className="flex flex-col gap-4">
                    <Slider sliderSize="sm" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
                    <Slider sliderSize="md" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
                    <Slider sliderSize="lg" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
                    <Slider sliderSize="xl" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
                </div>
            </section>

            {/* Disabled */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">
                    Disabled
                </h2>
                <Slider value={40} disabled />
            </section>

            {/* Without Tooltip */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">
                    Without Tooltip
                </h2>
                <Slider showTooltip={false} value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
            </section>

            {/* Without Marks */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">
                    Without Marks
                </h2>
                <Slider step={10} showMarks={false} value={markValue} onChange={(e) => setMarkValue(Number(e.target.value))} />
            </section>

        </Container>
    )
}

export default SliderPage