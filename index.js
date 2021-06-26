function toast(message, title = "osd-toast") {
    const textInfo = new StrokesPlus.Types.Internal.DisplayTextInfo();

    textInfo.UsePrimaryScreen = false;
    textInfo.Message = message;
    textInfo.Title = title;
    textInfo.TitleFont = new Font("Segoe UI", 18, host.flags(FontStyle.Bold));
    textInfo.TitleAlignment = "Right";
    textInfo.MessageFont = new Font("Segoe UI Semibold", 14);
    textInfo.MessageAlignment = "Right";
    textInfo.Padding = 10;
    textInfo.Duration = 2000;
    textInfo.Location = "topright";
    textInfo.Opacity = 0.9;
    textInfo.ForeColor =  "white";
    textInfo.BackColor = "red";

    return StrokesPlus.UI.TextOverlay.Show(textInfo);
}