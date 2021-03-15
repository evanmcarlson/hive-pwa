const tools = new Array(20).fill(
    {
      room: 'LS 158',
      department: 'Engineering',
      shortName: '3D Scanner',
      shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      model: 'NextEngine Desktop 3D Scanner Ultra HD 2020i',
      serialNumber: '05 19 10 76358',
      toolUrl: '/tools/3d-scanner',
      // eslint-disable-next-line max-len
      imageUrl: 'https://www.aniwaa.com/wp-content/uploads/2016/02/3D-scanner-Next-Engine-3D-Scanner-ULTRA-HD-perspective.jpg',
    },
);

/**
 * Retrieves a array of all tools in the Hive.
 * @return {Array} an array of tool objects.
 */
export function getTools() {
  return tools;
}