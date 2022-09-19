import { Menu } from "antd";

function CustomMenu({
  items,
}: {
  items: { route?: string; icon?: any; label: string; key: string }[];
}) {
  return (
    <>
      {/* {items[0].key} */}
      {items.map((item: any) => (
        <Menu.Item
          key={item?.key}
          label={item?.label}
          // icon={item?.icon}
          title={item?.label}
        ></Menu.Item>
      ))}
    </>
  );
}

export default CustomMenu;
