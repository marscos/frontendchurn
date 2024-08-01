import React, { KeyboardEventHandler, useState } from 'react';

export const Document = () => {
  const [addedText, setAddedText] = useState<string[]>([]);

  const enterHandler: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key == 'Enter') {
      setAddedText(addedText.concat(e.currentTarget.value));
      e.currentTarget.value = '';
    }
  };

  return [
    <textarea cols={30} rows={10} onKeyUp={enterHandler}></textarea>,
    <div>
      {addedText.map((t, i) => (
        <p key={i} className="addedText">
          {t}
        </p>
      ))}
    </div>,
  ];
};
