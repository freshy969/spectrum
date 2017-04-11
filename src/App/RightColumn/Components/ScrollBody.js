//@flow
import React, { Component } from 'react';
//$FlowFixMe
import styled from 'styled-components';

export class ScrollBody extends Component {
  componentDidMount() {
    const { forceScrollToBottom } = this.props;
    // force scroll to bottom when thread loads if designated
    if (forceScrollToBottom) {
      this.forceScrollToBottom();
    }
  }

  componentDidUpdate(prevProps) {
    // force scroll to bottom when thread is changed
    if (
      prevProps.active !== this.props.active && this.props.forceScrollToBottom
    ) {
      this.forceScrollToBottom();
    }
  }

  forceScrollToBottom = () => {
    if (!this.scrollBody) return;
    let node = this.scrollBody;
    node.scrollTop = node.scrollHeight - node.clientHeight;
  };

  render() {
    return (
      <StyledScrollBody innerRef={scrollBody => this.scrollBody = scrollBody}>
        {this.props.children}
      </StyledScrollBody>
    );
  }
}

const StyledScrollBody = styled.div`
  display: flex;
  flex: 1 1 auto;
  max-height: 100%;
  flex-direction: column;
  overflow-y: scroll;
`;