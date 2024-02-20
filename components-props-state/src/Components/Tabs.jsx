function Tabs({ children, buttons, ButtonContent }) {
  return (
    <div>
      <ButtonContent>{buttons}</ButtonContent>
      {children}
    </div>
  );
}

export default Tabs;
