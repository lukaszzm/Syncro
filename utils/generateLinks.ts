type MenuLink = {
  label: string;
  to: string;
};

export function generateLinks(path: string): MenuLink[] {
  const result: { label: string; to: string }[] = [];
  const steps = path.split("/");
  let currentPath = "/";

  steps.forEach((el) => {
    if (el !== "") {
      result.push({
        label: el,
        to: currentPath + el,
      });
      currentPath += el + "/";
    }
  });

  return result;
}
