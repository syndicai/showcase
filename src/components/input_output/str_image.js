import React from "react";
import { Button, Input, Image, GeistProvider, CssBaseline, Code } from '@geist-ui/react'
// import { RefreshCcw } from '@geist-ui/react-icons'


export default class StrImage extends React.Component {
    state = {
        model: this.props.data.model,
        img_url: this.props.data.sample_input,
        output: null,
        loading: false,
    };

    toggleInputChange = (e) => {
        this.setState({ img_url: e.target.value, output: null});
    }

    toggleButtonState = () => {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        let input_url = this.state.img_url
        this.setState({ loading: true, output: null});
        fetch(proxyUrl + input_url, {
            method: 'GET',
            crossDomain: true,
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
                    fetch(
                        this.state.model,
                        {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ strData: input_url})
                        }
                    )
                        .then((response) => {
                            return response.text();
                        })
                        .then((data) => {
                            this.setState({ output: JSON.parse(data).strData, loading: false});
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


                {/* RUN Model */}
                <div className="my-5">
                    <Input value={this.state.img_url} width="100%" onChange={this.toggleInputChange} />
                    <div className="flex justify-center">
                        <Button className="m-2" type="success" onClick={this.toggleButtonState} loading={this.state.loading}>Run model</Button>
                        {/*<Button className="my-2" iconRight={<RefreshCcw />} auto />*/}
                    </div>
                </div>

                {/* OUTPUT: Json */}
                {
                    (this.state.output === null)
                        ? null
                        : <div className="w-full background-dots flex justify-center items-center" >
                            <Image height="440"  src={`data:image/png;base64,${this.state.output}`}/>
                        </div>
                }

            </GeistProvider>
        );
    }
}
