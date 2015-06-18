var tags = [
  '@const',
  '@constructor',
  '@enum',
  '@implements',
  '@interface',
  '@param',
  '@private',
  '@return',
  '@type']

var types = [
  '{string}',
  '{number}',
  '{boolean}',
  '{symbol}',
  '{Array<>}',
  '{Object}',
  '{function()}',
  '{*}',
  '{?}',
  '{undefined}']

var tagOptions = tags.join(':')
var typeOptions = types.join(':')

var blockTagPopup = '%' + 'fillpopup:name=Block Tag:' + tagOptions + '%'
var typeExpressionPopup = '%' + 'fillpopup:name=Type Expression:' + typeOptions + '%'
var typeExpressionOptionalSection = ' %' + 'fillpart:name=Type :default=no' + '%' + typeExpressionPopup + '%' + 'fillpartend' + '%'
var otherTypeOptionalSection = ' %' + 'fillpart:name=Other Type :default=no%{' + '%' + 'filltext:name=Other Type:width=15%' + '}%' + 'fillpartend' + '%'

var popup = blockTagPopup + typeExpressionOptionalSection + otherTypeOptionalSection
var expand = '/**\n * %|\n * ' + popup + '\n */'

TextExpander.appendOutput(expand)