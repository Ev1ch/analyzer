import React, { useState, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './tabs.module.scss';

interface ITab {
  id: string | number;
  title: string | JSX.Element;
  content: string | JSX.Element;
}

interface ITabsProps {
  tabs: ITab[];
}

export default function Tabs({
  tabs,
  ...props
}: ITabsProps & HTMLAttributes<HTMLDivElement>): JSX.Element {
  const [currentTab, setCurrentTab] = useState(
    tabs.length > 0 ? tabs[0] : null,
  );

  return (
    <div {...props} className={clsx(styles.tabs, props.className)}>
      <div className={styles.tabs__navigation}>
        {tabs.map((tab) => (
          <div
            className={clsx(
              styles.tabs__button,
              tab.id === currentTab?.id && styles.tabs__button_active,
            )}
            key={tab.id}
            onClick={() => setCurrentTab(tab)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {currentTab && (
        <div className={styles.tab}>
          <div className={styles.tab__content}>{currentTab.content}</div>
        </div>
      )}
    </div>
  );
}
