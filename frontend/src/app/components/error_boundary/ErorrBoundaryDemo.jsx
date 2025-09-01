'use client'
import {Component} from "react";
import {ErrorBoundary} from "react-error-boundary";
import PropTypes from "prop-types";


function ProblemComponent({message}) {
    console.log('message', message.toUpperCase());
    return (<div>
        Hello {message}
    </div>)
}
ProblemComponent.defaultProps = {
    message :  "hi there",
}
export default class ErorrBoundaryDemo extends Component {
    render() {
        return (<div>
                ErorrBoundaryDemo
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <ProblemComponent message1={"Hello"}/>
                </ErrorBoundary>

            </div>
        )
    }
}