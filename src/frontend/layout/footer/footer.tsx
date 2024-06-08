import React from "react";
import FooterData from "../../../data/footer";
export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-custom-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          {FooterData.sections.map((items, index) => (
            <div key={index}>
              <h2 className="text-3xl ">{items.title}</h2>
              <div>
                <ul>
                  {items.links &&
                    items.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.url}>{link.name}</a>
                      </li>
                    ))}
                  {items.socialMedia &&
                    items.socialMedia.map((social, idx) => (
                      <li key={idx}>
                        <a href={social.url}>{social.platform}</a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
