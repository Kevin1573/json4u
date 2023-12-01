"use client";
import {Switch, Tooltip} from "@arco-design/web-react";
import {switchAutoFormat, switchAutoSort, switchNestParse} from "@/features/ctxSlice";
import {useDispatch, useSelector} from "react-redux";

export function FormatSwitch() {
  const ctx = useSelector((state) => state.ctx);
  const dispatch = useDispatch();

  const name = "自动格式化";
  const desc = "粘贴或拖拽上传文件时，执行格式化";

  return (
    <Tooltip mini position="bottom" content={desc}>
      <Switch checked={ctx.enableAutoFormat}
              defaultChecked={ctx.enableAutoFormat}
              checkedText={name}
              uncheckedText={name}
              onChange={() => dispatch(switchAutoFormat())}/>
    </Tooltip>
  );
}

export function SortSwitch() {
  const ctx = useSelector((state) => state.ctx);
  const dispatch = useDispatch();

  const name = "自动排序";
  const desc = <span>粘贴或拖拽上传文件时，执行 JSON 升序排序。<br/>比较时，进行文本比较。</span>;

  return (
    <Tooltip mini position="bottom" content={desc}>
      <Switch checked={ctx.enableAutoSort}
              defaultChecked={ctx.enableAutoSort}
              checkedText={name}
              uncheckedText={name}
              onChange={() => dispatch(switchAutoSort())}/>
    </Tooltip>
  );
}

export function NestParseSwitch() {
  const ctx = useSelector((state) => state.ctx);
  const dispatch = useDispatch();

  const name = "嵌套解析";
  const desc = "递归的将被转义的字符串进行 JSON 解析";

  return (
    <Tooltip mini position="bottom" content={desc}>
      <Switch checked={ctx.enableNestParse}
              defaultChecked={ctx.enableNestParse}
              checkedText={name}
              uncheckedText={name}
              onChange={() => dispatch(switchNestParse())}/>
    </Tooltip>
  );
}
