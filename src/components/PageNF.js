import React, {Component} from 'react';
import styled from "styled-components";

class PageNf extends Component {
    render() {
        return (
            <NFWrapper>
                <h3 className="text-center m-sm-5 text-uppercase">
                    SORRY..THE PAGE YOU ARE LOOKING FOR IS MISSING
                </h3>
            </NFWrapper>
        );
    }
}

const NFWrapper = styled.h3`
    text-align: center`

export default PageNf;