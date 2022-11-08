import React from "react";

const links = [
  {
    text: "I am banned (or am getting a message saying I’m banned) and would like to appeal (or get information on why I’m banned).",
    href: "/*insert link*/",
  },
  {
    text: "I have a question/suggestion about your substance information (Wiki, factsheets, or other info).",
    href: "/*insert link*/",
  },
  {
    text: "I have a question/suggestion about IRC.",
    href: "/*insert link*/",
  },
  {
    text: "I have another problem related to IRC.",
    href: "/*insert link*/",
  },
  {
    text: "I’d like to apply for staff/volunteer.",
    href: "/*insert link*/",
  },
  {
    text: "I am a media represenative looking to do a story/article.",
    href: "/*insert link*/",
  },
  {
    text: "I have SEO/page-view/sales opportunities.",
    href: "/*insert link*/",
  },
];

export default function Links() {
  return (
    <>
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
