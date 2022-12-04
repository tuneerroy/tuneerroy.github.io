import {
    BsEnvelopeFill,
    BsGithub,
    BsLinkedin,
    BsFileEarmarkPersonFill
} from 'react-icons/bs'
import { Tooltip } from 'react-bootstrap'
import OverlayTrigger, {
    OverlayTriggerRenderProps
} from 'react-bootstrap/OverlayTrigger'

const PersonalLinks = () => {
    interface TooltipWrapperProps {
        tip: string,
        children: React.ReactNode
    }
    const TooltipWrapper: React.FC<TooltipWrapperProps> = (props) => {
        const children = props.children as unknown as
            ((props: OverlayTriggerRenderProps) => React.ReactNode)

        return (
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 200 }}
                overlay={<Tooltip>{props.tip}</Tooltip>}>
                {children}
            </OverlayTrigger>
        )
    }

    return (
        <div className="vertical-align">
            <h1>Hi, I'm Tuneer!</h1>
            <div className="links">
                <TooltipWrapper tip="Email">
                    <a
                        href="mailto:tuneer.roy12@gmail.com">
                        <BsEnvelopeFill />
                    </a>
                </TooltipWrapper>
                <TooltipWrapper tip="GitHub">
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/tuneerroy">
                        <BsGithub />
                    </a>
                </TooltipWrapper>
                <TooltipWrapper tip="LinkedIn">
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/tuneer-roy-a792a11a4">
                        <BsLinkedin />
                    </a>
                </TooltipWrapper>
                <TooltipWrapper tip="Resume">
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="/Tuneer's%20Resume.pdf">
                        <BsFileEarmarkPersonFill />
                    </a>
                </TooltipWrapper>
            </div>
        </div>
    )
}

export default PersonalLinks