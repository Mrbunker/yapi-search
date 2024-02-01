import { getMenu } from "@/app/api/interface";
import InterfaceInput from "@/app/components/InterfaceInput";

type Porps = {};

const PROJECT_MAP = {
  "elife-api": 944,
};
const InterfaceInfo = async ({}: Porps) => {
  const projectId = PROJECT_MAP["elife-api"];
  const menuData = await getMenu({
    // !todo 改成动态
    project_id: projectId,
  });
  if (!menuData.data) {
    return <div>接口数据获取失败</div>;
  }
  const allInterface = menuData.data.flatMap((item) => item.list);
  return (
    <InterfaceInput
      data={allInterface}
      placeholder={"当前项目 id：" + projectId}
    />
  );
};

export default InterfaceInfo;
