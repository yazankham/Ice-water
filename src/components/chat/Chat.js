import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  motion,
  AnimatePresence
} from 'framer-motion';
import useInterval from '../../hooks/useInterval';
import { chatVariants } from '../../utils/animationVariants';
import './Chat.css';


export function Chat({ chatMessages, onButtonClick }) {
  const [messages, setMessages] = React.useState([]);

  useInterval(() => {
    if (messages.length < chatMessages.length) {
      setMessages(curr => [...curr, chatMessages[curr.length]]);
    }
  }, 1500);

  const renderChatMessage = (sender, color, message) => {
    const chatBubbleClass = (sender === 'guest') ? `chat-bubble-left` : `chat-bubble-right`;
    const chatBubbleColorClass = `chat-bubble-${color}`;
    return (
      <div>
        <span className={classnames(chatBubbleClass, chatBubbleColorClass)}>
          {message}
        </span>
      </div>
    );
  }

  const renderChatBubble = (chat) => {
    const { sender, color, hasOnClickEvent, message } = chat;
    const chatBubbleContainerClass = `flex flex-col space-y-2 text-sm leading-4 font-normal
      max-w-[279px] mx-2 ${(sender === 'guest') ? `order-2 items-start` : `order-1 items-end`}`;

    return (
      <div className={`flex items-end ${(sender === 'admin') && `justify-end`}`}>
        {(hasOnClickEvent)
          ? (
            <button className={chatBubbleContainerClass} onClick={onButtonClick}>
              {renderChatMessage(sender, color, message)}
            </button>)
          : (
            <div className={chatBubbleContainerClass}>
              {renderChatMessage(sender, color, message)}
            </div>
          )}
      </div>
    );
  }

  const renderChat = () => {
    return (
      messages.map((chat, index) => {
        if (index === 0) {
          return (
            <motion.div
              key={index}
              initial="offscreen"
              animate="onscreen"
              variants={chatVariants}
              layout>
              <div className="w-[38px] h-[38px] bg-[url('./images/chat-guest.svg')]
                  bg-no-repeat bg-center bg-contain relative -left-[40px] top-[10px]"></div>
              <article className="chat-message">
                {renderChatBubble(chat)}
              </article>
            </motion.div>
          )
        }
        return (
          <motion.article
            key={index}
            className="chat-message"
            initial="offscreen"
            animate="onscreen"
            variants={chatVariants}
            layout>
            {renderChatBubble(chat)}
          </motion.article>
        )
      }))
  }

  return (
    <AnimatePresence>
      {(messages && messages.length <= chatMessages.length) && renderChat()}
    </AnimatePresence>
  );
}

Chat.propTypes = {
  chatMessages: PropTypes.array.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Chat;
