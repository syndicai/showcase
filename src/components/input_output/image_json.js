import React from "react";
import { Button, Input, Image, GeistProvider, CssBaseline, Code } from '@geist-ui/react'
// import { RefreshCcw } from '@geist-ui/react-icons'


export default class InputJson extends React.Component {
    state = {
        img_url: this.props.data.sample_input,
        output: null,
        loading: false,
    };

    toggleInputChange = (e) => {
        this.setState({ img_url: e.target.value});
    }

    toggleButtonState = () => {
        let url = this.state.img_url
        this.setState({ loading: true, output: null});
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                return response.blob();
            })
            .then((data) => {
                let reader = new FileReader();
                reader.readAsDataURL(data);
                reader.onloadend = () => {
                    let result = reader.result;
                    let base64data = result.substr(result.indexOf(',')+1)
                    fetch(
                        "https://ac0a8dd7-8035-409c-ba2a-5c68e240fdd7.d1.syndic.ai/predict",
                        {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ data: { ndarray: base64data } })
                        }
                    )
                        .then((response) => {
                            return response.text();
                        })
                        .then((data) => {
                            this.setState({ output: data, loading: false});
                        })
                }
            })
    };

    render() {
        return (
            <GeistProvider>
                <CssBaseline />

                {/* INPUT: Image */}
                {
                    (this.state.img_url === "")
                        ? null
                        : <div className="w-full background-dots flex justify-center items-center" style={{height:"440px"}}>
                            <Image height="440" src={this.state.img_url} />
                        </div>
                }

                {/* OUTPUT: Json */}
                {
                    (this.state.output === null)
                        ? null
                        : <div className="w-full background-dots flex justify-center items-center" >
                            <Code width="100%" className="bg-white" block>{this.state.output}</Code>
                        </div>
                }


                {/* RUN Model */}
                <div className="my-5">
                    <Input value={this.state.img_url} width="100%" onChange={this.toggleInputChange} />
                    <div className="flex justify-center">
                        <Button className="m-2" type="success" onClick={this.toggleButtonState} loading={this.state.loading}>Run model</Button>
                        {/*<Button className="my-2" iconRight={<RefreshCcw />} auto />*/}
                    </div>
                </div>

            </GeistProvider>
        );
    }
}
