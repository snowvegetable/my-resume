import type { ReactNode } from 'react';
import Card from '../../Card';

type SkillsCardType = {
  title: string;
  titleIcon?: ReactNode;
  titleColor: TitleColorType;
  itemList: ItemType[];
  className?: string;
};

type TitleColorType = 'text-cyan-500' | 'text-fuchsia-500' | 'text-gray-500';

type ItemType = {
  itemTitle: string;
  itemIcon?: ReactNode;
};

export default function SkillsCard({
  title = '',
  titleIcon,
  titleColor,
  itemList = [],
  className = '',
}: SkillsCardType) {
  return (
    <Card className={className}>
      <div className={`flex items-center gap-3 text-2xl mb-5  ${titleColor}`}>
        {titleIcon}
        <h2 className="font-bold">{title}</h2>
      </div>
      <div className="flex flex-wrap justify-around">
        {itemList.map((item) => (
          <div
            key={item.itemTitle}
            className="flex flex-col justify-center items-center gap-3"
          >
            {item.itemIcon && <div className="text-5xl">{item.itemIcon}</div>}
            <h3
              className={`text-1xl ${!item.itemIcon && 'bg-gray-500/10 border  border-cyan-500/20 rounded-md px-2.5 py-1'}`}
            >
              {item.itemTitle}
            </h3>
          </div>
        ))}
      </div>
    </Card>
  );
}
