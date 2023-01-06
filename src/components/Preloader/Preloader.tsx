import {LoadingOutlined} from "@ant-design/icons";
import st from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div className={st.preloader}>
            <LoadingOutlined
                style={{
                    fontSize: 80,
                }}
                spin
            />
        </div>
    )
}

export default Preloader;